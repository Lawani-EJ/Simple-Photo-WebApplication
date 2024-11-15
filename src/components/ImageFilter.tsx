import { useState } from "react";
import Button from "./Button";
import { filterData } from "../data/FilterData";
import { Image } from "./Image";
import { Text } from "./Text";

const ImageFilter = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const buttonCaptions = ['all', 'nature', 'cars', 'people'];
    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <section className="w-full flex flex-col gap-10 py-12 px-4 md:px-8 lg:px-12 bg-gray-900 text-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
                {buttonCaptions.map((filter) => (
                    <Button
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        type="button"
                        className={`focus:outline-none border-2 border-gray-600 hover:bg-gray-700 rounded-lg text-sm px-4 py-2 capitalize transition-colors duration-200 ${
                            activeFilter === filter ? "bg-gray-700 text-white" : "text-gray-400"
                        }`}
                    >
                        {filter === 'all' ? 'Show all' : filter}
                    </Button>
                ))}
            </div>

            <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterData.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full transition-all duration-200 rounded-lg bg-gray-800 border border-gray-700 shadow-lg ${
                            activeFilter === 'all' || activeFilter === item.name ? 'block' : 'hidden'
                        }`}
                    >
                        <Image
                            className="rounded-t-lg w-full h-[200px] overflow-hidden"
                            image={item.src}
                            alt={item.name}
                            objectCover="object-cover"
                        />
                        <div className="p-4">
                            <Text as="h5" className="text-lg font-semibold text-gray-100 mb-2">
                                {item.title}
                            </Text>
                            <Text as="p" className="text-sm text-gray-400">
                                {item.text}
                            </Text>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
};

export default ImageFilter;
