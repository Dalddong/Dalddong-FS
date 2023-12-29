export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}

export interface InputProps {
  className: string;
  content: string | React.ReactNode;
  placeholder: string;
}
