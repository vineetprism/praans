import { Button } from "@/components/ui/button"

export default function Cta() {
    return (
        <section className="py-16 md:py-20 lg:py-10 2xl:py-24 bg-slate-800 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Join Our Growing Family of Satisfied Clients?</h2>
                <p className="text-xl mb-8 text-gray-300">
                    Let's discuss how we can simplify your labour law compliance and help your business grow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-400 text-white text-lg px-8 py-6 cursor-pointer" aria-label="Get Free Consultaion" >
                        Get Free Consultation
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white text-slate-800 hover:text-orange-500 text-lg px-8 py-6 cursor-pointer" aria-label="View Case Studies" >
                        View Case Studies
                    </Button>
                </div>
            </div>
        </section>
    )
}

