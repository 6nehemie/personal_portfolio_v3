import ButtonArrowUpRight from '@/components/buttons/ButtonArrowUpRight';
import { Button } from '@/components/ui/button';
import { EN as en } from '@/constants';
import { ArrowUpRight, TimerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * The Blogs section component.
 * @returns The Blogs section component.
 */
const Blogs = () => {
  return (
    <section className="p-side space-y-10">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl max-lg:w-[320px]">
          Expert Insights & Latest Innovations
        </h2>

        <ButtonArrowUpRight label="View All" href="/blogs" />
      </div>

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
                  className="sm:group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="sm:absolute bottom-0 flex flex-col justify-between sm:h-[168px] sm:group-hover:h-[180px] transition-size duration-300 p-5 bg-nm-gray-700">
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

              <div className="h-[168px] w-full bg-nm-gray-700 max-sm:hidden"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Blogs;
