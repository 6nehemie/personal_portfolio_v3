import { EN as en } from '@/constants';
import { TimerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * The Blogs section component.
 * @returns The Blogs section component.
 */
const Blogs = () => {
  return (
    <section className="p-side space-y-8">
      <h2 className="text-2xl max-w-[424px]">
        Expert Insights & Latest Innovations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5">
        {en.blogs.map((blog, index) => {
          return (
            <Link
              key={index}
              href={blog.href}
              className="rounded-md overflow-hidden"
            >
              <div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1091}
                  height={691}
                />
              </div>

              <div className="flex flex-col justify-between h-[168px] p-5 bg-nm-gray-700">
                <h3 className="text-xl font-medium">{blog.title}</h3>
                {blog.readingTime && (
                  <div className="space-x-1 text-xs bg-nm-gray-500 rounded-full px-2.5 py-1.5 w-max">
                    <TimerIcon size={14} className="inline" />

                    <span>
                      {blog.readingTime}
                      {blog.readingTime > 1 ? 'mins' : 'min'}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Blogs;
