import { Navigate } from "react-router-dom";

export default function PrivateRouteHandler({ children }: { children: React.ReactNode }) {
  const isAuthenticated = false; // Replace with your authentication logic

  if (!isAuthenticated) {
    return (
      <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
           <h2 className="text-2xl font-bold text-red-600 mb-4">Unauthorized</h2>
           <p className="text-gray-700 mb-6">You do not have permission to view this page.</p>
           <Navigate to="/" replace />
         </div>
       </div>
      </>
    );
  }

  return <>{children}</>;
}
