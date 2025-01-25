```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const basePath = router.asPath.split('?')[0]; // Remove query parameters

  return (
    <div>
      <Link href={`${basePath}/`}>
        <a>Home</a>
      </Link>
      <Link href={`${basePath}/about`}>
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```