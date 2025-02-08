import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

interface SubtleLinkButtonProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
  color?: string;
  p?: number | "xl" | "md" | "sm" | "lg";
}

const SubtleLinkButton = ({
  to,
  size,
  children,
  color,
  onClick,
  p,
}: SubtleLinkButtonProps) => {
  return (
    <Link to={to}>
      <Button
        size={size || "lg"}
        variant="subtle"
        // variant="filled"
        // gradient={{ from: '#3B5BDB', to: '#22B8CF', deg: 360 }}
        color={color || "blue"}
        radius="xs"
        onClick={onClick}
        style={{ borderRadius: "8px" }}
        p={p || 8}
      >
        {children}
      </Button>
    </Link>
  );
};

export default SubtleLinkButton;
