import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

/**
 * The Contact page.
 * @returns The Contact page component.
 */
const Contact = () => {
  return (
    <div className="py-10 w-full h-full flex items-center justify-center p-side">
      <div className="md:max-w-[540px] w-full space-y-5">
        <h1 className="font-medium text-3xl">Let&apos;s talk</h1>

        <div className="flex max-sm:flex-col sm:items-center gap-5 p-5 rounded-lg border border-nm-gray-700 ">
          <Avatar className="size-20 max-sm:hidden">
            <AvatarImage
              src="https://utfs.io/f/861ea29b-6e4c-4b05-b759-0747879aa0fb-1xajst.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>

          <p className="text-nm-gray-200 font-medium text-[15px]">
            Excited to explore new opportunities in software engineering. Drop
            me a message—let’s create something great together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 w-full">
          <Link
            href="mailto:nehemie.mbg@gmail.com"
            target="_blank"
            className="flex flex-col justify-between gap-5 p-5 rounded-lg border border-nm-gray-700 bg-nm-gray-700"
          >
            <h3 className="font-medium">Email Me</h3>

            <div className="text-sm">
              <div className="text-nm-gray-200">
                Got something on your mind?
              </div>
              <div>Shoot me an email, and let&apos;s make it happen.</div>
            </div>

            <div className="block text-sm underline font-medium">
              nehemie.mbg@gmail.com
            </div>
          </Link>

          <Link
            href="tel:+33769357453"
            className="flex flex-col justify-between gap-5 p-5 rounded-lg border border-nm-gray-700 bg-nm-gray-700 "
          >
            <h3 className="font-medium">Call Me</h3>

            <div className="text-sm">
              <div className="text-nm-gray-200">Ready to chat?</div>
              <div>
                Call anytime <span className="font-medium">Mon-Sat</span>,{' '}
                <span className="font-medium">8am-6pm</span>.
              </div>
            </div>

            <div className="block text-sm underline font-medium">
              +33 7 69 35 74 53
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
