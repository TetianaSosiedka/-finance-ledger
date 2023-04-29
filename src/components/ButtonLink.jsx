const ButtonLink = ({ href, title = '', className = '', children, iconId }) => {
  return (
    <a className={`button ${className}`} href={href} title={title}>
      {iconId && (
        <svg id={iconId} viewBox="0 0 19 28">
          <path d="M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
        </svg>
      )}

      {children}
    </a>
  );
};
export default ButtonLink;
