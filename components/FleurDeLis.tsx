interface FleurDeLisProps {
  className?: string;
  color?: string;
}

export default function FleurDeLis({ className = '', color = 'currentColor' }: FleurDeLisProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C11.5 2.5 10.5 3.5 10 5C9.5 6.5 9.5 7.5 10 8.5C10.5 9.5 11 10 12 10C13 10 13.5 9.5 14 8.5C14.5 7.5 14.5 6.5 14 5C13.5 3.5 12.5 2.5 12 2M7 7C6 8 5 9 5 10.5C5 12 5.5 13 6.5 13.5C7.5 14 8.5 13.5 9 12.5C9.5 11.5 9.5 10.5 9 9.5C8.5 8.5 7.5 7.5 7 7M17 7C16.5 7.5 15.5 8.5 15 9.5C14.5 10.5 14.5 11.5 15 12.5C15.5 13.5 16.5 14 17.5 13.5C18.5 13 19 12 19 10.5C19 9 18 8 17 7M12 10C10 10 8.5 11 8 12.5C7.5 14 7.5 15.5 8 17C8.5 18.5 9.5 20 11 21.5C11.3 21.8 11.7 22 12 22C12.3 22 12.7 21.8 13 21.5C14.5 20 15.5 18.5 16 17C16.5 15.5 16.5 14 16 12.5C15.5 11 14 10 12 10Z" />
    </svg>
  );
}
