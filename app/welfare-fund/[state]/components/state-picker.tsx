'use client'

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Check, ChevronsUpDown, Info, MapPin, Sparkles } from 'lucide-react'

type Props = {
  currentSlug: string
  availableStates: string[]
  applicableStates: string[]
  nonApplicableStates: string[]
}

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-")
}

function StateBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200 px-2 py-1 text-xs">
      <MapPin className="mr-1 h-3 w-3 text-slate-500" />
      {text}
    </span>
  )
}

function PopularChip({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
      aria-label={`Quick select ${label}`}
    >
      {label}
    </button>
  )
}

export function StatePicker({
  currentSlug,
  availableStates,
  applicableStates,
  nonApplicableStates,
}: Props) {
  const router = useRouter()
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  const options = useMemo(() => {
    const all = [
      ...applicableStates.map((n) => ({ name: n, applicable: true })),
      ...nonApplicableStates.map((n) => ({ name: n, applicable: false })),
    ].map((o) => {
      const slug = toSlug(o.name)
      const available = availableStates.includes(slug)
      return { ...o, slug, available }
    })

    const selected = all.find((o) => o.slug === currentSlug)
    return { all, selected }
  }, [currentSlug, availableStates, applicableStates, nonApplicableStates])

  function handleSelect(slug: string, available: boolean, name: string) {
    setOpen(false)
    if (!available) {
      toast({
        title: "Coming soon",
        description: `${name} details are being added. Please check back shortly.`,
      })
      return
    }
    router.push(`/welfare-fund/${slug}`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <p className="text-sm font-medium text-slate-800">Select State</p>
        </div>
        {options.selected ? <StateBadge text={options.selected.name} /> : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {["Maharashtra", "Karnataka", "Tamil Nadu", "Andhra Pradesh"].map(
          (label) => {
            const slug = toSlug(label)
            const available = availableStates.includes(slug)
            return (
              <PopularChip
                key={label}
                label={label}
                onClick={() => handleSelect(slug, available, label)}
              />
            )
          }
        )}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="Choose a state"
            aria-expanded={open}
            className="w-full justify-between h-11 rounded-lg border-slate-300 bg-white shadow-sm hover:bg-slate-50"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-500" />
              {options.selected?.name ?? "Search and choose a state"}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[320px]" align="start">
          <Command>
            <CommandInput placeholder="Type to search state..." />
            <CommandList>
              <CommandEmpty>No result found.</CommandEmpty>

              <CommandGroup heading="Applicable States">
                <ScrollArea className="max-h-48">
                  {options.all
                    .filter((o) => o.applicable)
                    .map((o) => (
                      <CommandItem
                        key={o.slug}
                        value={o.name}
                        onSelect={() =>
                          handleSelect(o.slug, o.available, o.name)
                        }
                        className="cursor-pointer"
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            o.slug === currentSlug ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <span className="flex-1">{o.name}</span>
                        <Badge
                          variant={o.available ? "secondary" : "outline"}
                          className={`ml-2 ${
                            o.available
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "text-slate-500"
                          }`}
                        >
                          {o.available ? "Available" : "Soon"}
                        </Badge>
                      </CommandItem>
                    ))}
                </ScrollArea>
              </CommandGroup>

              <CommandGroup heading="Non-Applicable States">
                <ScrollArea className="max-h-48">
                  {options.all
                    .filter((o) => !o.applicable)
                    .map((o) => (
                      <CommandItem
                        key={o.slug}
                        value={o.name}
                        onSelect={() =>
                          handleSelect(o.slug, o.available, o.name)
                        }
                        className="cursor-pointer"
                      >
                        <Check className="mr-2 h-4 w-4 opacity-0" />
                        <span className="flex-1">{o.name}</span>
                        <Badge variant="outline" className="ml-2">
                          Info
                        </Badge>
                      </CommandItem>
                    ))}
                </ScrollArea>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="flex items-start gap-2 rounded-md bg-slate-50 p-3 text-xs text-slate-600">
        <Info className="mt-0.5 h-3.5 w-3.5 text-slate-500" />
        <p>
          States marked as “Soon” will be added shortly. For urgent queries,
          reach out via the contact form.
        </p>
      </div>
    </div>
  )
}
