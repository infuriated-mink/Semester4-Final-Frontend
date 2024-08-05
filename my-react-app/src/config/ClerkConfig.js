import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = ''; // Sample Clerk frontend API key

const ClerkConfig = ({ children }) => {
    <ClerkProvider frontendApi={clerkFrontendApi}>
        {children}
    </ClerkProvider>
};

export default ClerkConfig;