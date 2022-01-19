import Image from 'next/image'
import Layout from '../components/Layout'

export default function GalleryPage() {
    return (
        <Layout>
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" height={148} width={233} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" height={148} width={233} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" height={148} width={233} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" height={148} width={233} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" height={148} width={233} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" height={148} width={233} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
