import PageHeader from '@/components/sections/reutilisable/PageHeader';

import { EN as en } from '@/constants';
import { TimerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * The Blogs page.
 * @returns The Blogs page component.
 */
const Blogs = () => {
  return (
    <div className="p-side space-y-20 ">
      <PageHeader
        title="Blogs"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          praesentium quasi adipisci repellendus nam maxime consectetur quo
          nisi nulla rerum? Asperiores iste quibusdam incidunt molestias
          fugit, accusantium facere odit consectetur!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5">
        {en.blogs.map((blog, index) => {
          return (
            <Link
              key={index}
              href={blog.href}
              className="relative max-sm:blogs-grid rounded-sm md:rounded-md overflow-hidden group"
            >
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1091}
                  height={691}
                  className="sm:group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                />
              </div>

              <div className="sm:absolute bottom-0 left-0 right-0 flex flex-col justify-between sm:h-[168px] sm:group-hover:h-[180px] transition-size duration-300 p-5 bg-nm-gray-700">
                <h3 className="text-md xl:text-lg 2xl:text-xl font-medium">
                  {blog.title}
                </h3>
                {blog.readingTime && (
                  <div className="space-x-1 text-xs bg-nm-gray-500 rounded-full px-2.5 py-1.5 w-max max-sm:hidden">
                    <TimerIcon size={14} className="inline" />

                    <span>
                      {blog.readingTime}
                      {blog.readingTime > 1 ? 'mins' : 'min'}
                    </span>
                  </div>
                )}
              </div>

              <div className="h-[168px] bg-nm-gray-700 max-sm:hidden"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
