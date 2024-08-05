import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = ''; // This is where the Clerk frontend API key will go.

const ClerkConfig = ({ children }) => {
    <ClerkProvider frontendApi={clerkFrontendApi}>
        {children}
    </ClerkProvider>
};

export default ClerkConfig;