import { cn } from "@/lib/utils";

type F1CarIconProps = {
  className?: string;
};

/**
 * Simple flat side-profile F1 car silhouette — low chassis, cockpit hump,
 * exposed open wheels, front/rear wings. Uses currentColor so it inherits
 * text color, with an accent-colored wheel hub for a bit of pop.
 */
export function F1CarIcon({ className }: F1CarIconProps) {
  return (
    <svg
      viewBox="0 0 240 90"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-10", className)}
      aria-hidden
    >
      {/* Rear wing */}
      <rect x="6" y="18" width="30" height="6" rx="1.5" fill="currentColor" />
      <rect x="10" y="23" width="3" height="15" fill="currentColor" />
      <rect x="29" y="23" width="3" height="15" fill="currentColor" />

      {/* Chassis */}
      <path
        d="M20,60
           C20,50 28,44 42,42
           L72,40
           C86,40 96,30 116,24
           C124,21.5 134,21.5 142,25
           C152,29.5 160,36 172,40
           L196,44
           C207,46.5 214,51 216,58
           L216,60
           Z"
        fill="currentColor"
      />

      {/* Front wing */}
      <rect x="207" y="53" width="30" height="5" rx="1.5" fill="currentColor" />

      {/* Cockpit opening */}
      <ellipse cx="129" cy="28" rx="8" ry="5" className="fill-background" />

      {/* Rear wheel */}
      <circle cx="55" cy="62" r="15" fill="currentColor" />
      <circle cx="55" cy="62" r="6" className="fill-orange" />

      {/* Front wheel */}
      <circle cx="177" cy="62" r="15" fill="currentColor" />
      <circle cx="177" cy="62" r="6" className="fill-orange" />
    </svg>
  );
}
