import {
  IconButton,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";

type PropsType = {
  children: React.ReactNode;
  title: string;
  category: string | null;
  redirectPath: string | number;
};

const TooltipIcon = ({ children, title, category ,redirectPath }: PropsType) => {
  const router = useRouter();


  const redirect = () => {
    router.push(`${category}/${redirectPath}`);
  };

  // Added styles to tooltip
  const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  }));

  return (
    <DarkTooltip title={title} arrow>
      <IconButton className="hover:bg-white/10" onClick={redirect}>
        {children}
      </IconButton>
    </DarkTooltip>
  );
};

export default TooltipIcon;
