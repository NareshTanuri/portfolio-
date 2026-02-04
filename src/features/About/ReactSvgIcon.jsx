import { SvgIcon } from "@mui/material";

export default function ReactSvgIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 841.9 595.3">
      <g fill="none" stroke="currentColor" strokeWidth="40">
        <ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" />
        <ellipse rx="218.6" ry="82.9" cx="420.9" cy="296.5" />
        <ellipse
          rx="218.6"
          ry="82.9"
          cx="420.9"
          cy="296.5"
          transform="rotate(60 420.9 296.5)"
        />
        <ellipse
          rx="218.6"
          ry="82.9"
          cx="420.9"
          cy="296.5"
          transform="rotate(120 420.9 296.5)"
        />
      </g>
    </SvgIcon>
  );
}
