import { lazy, Suspense } from "react";

const LazyUsers = lazy(() => import("./Users"));

function LazyLoadingComponent() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<p>Loading component...</p>}>
        <LazyUsers />
      </Suspense>
    </div>
  );
}

export default LazyLoadingComponent;
