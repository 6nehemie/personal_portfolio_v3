import { cn } from '@/lib/utils';

const Stripe = ({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0,0,256,256"
      className={cn('', className)}
    >
      <g
        fill="#ffffff"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        // style="mix-blend-mode: normal"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M19,3h-14c-1.103,0 -2,0.897 -2,2v14c0,1.103 0.897,2 2,2h14c1.103,0 2,-0.897 2,-2v-14c0,-1.103 -0.897,-2 -2,-2zM14.825,14.286c0,1.938 -1.315,2.474 -1.955,2.626c-0.284,0.05 -0.572,0.088 -0.87,0.088c-0.224,0 -0.438,-0.037 -0.655,-0.066c-0.633,-0.123 -2.183,-0.64 -2.183,-3.128h1.89c0,1.708 0.881,1.637 1.015,1.637c0.147,0 0.868,-0.027 0.868,-1.143c0,-2.229 -3.459,-1.24 -3.459,-4.581c0,-2.29 1.898,-2.647 2.237,-2.69v0c0.097,-0.006 0.189,-0.029 0.287,-0.029c0.29,0 0.569,0.038 0.845,0.085c0.501,0.123 1.992,0.664 1.992,3.069h-1.89c0,-1.373 -0.583,-1.589 -0.828,-1.589c-0.134,0 -0.755,0.035 -0.755,1.162c0.002,1.967 3.461,1.354 3.461,4.559z"></path>
        </g>
      </g>
    </svg>
  );
};
export default Stripe;
