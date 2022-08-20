import { Link } from '@remix-run/react';

export default function Page() {
  return (
    <>
      <ul>
        <li>
          <Link to='/zh'>Zh</Link>
        </li>
        <li>
          <Link to='/en'>En</Link>
        </li>
        <li>
          <Link to='/login?redirect=/en'>Login</Link>
        </li>
      </ul>
    </>
  );
}
