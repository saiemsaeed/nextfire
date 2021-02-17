interface LoaderProps {
  show: Boolean;
}

function Loader({ show }: LoaderProps) {
  return show ? <div className='loader' /> : null;
}

export default Loader;
