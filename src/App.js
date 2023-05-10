import Home from "./pages/Home/home";
import "./styles/App.css";
import "./styles/variables.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Auth/SignUp/signup";
import Login from "./pages/Auth/Login/login";
import AdminLayout from "./layouts/admin-dashboard-layout/AdminLayout";

function App() {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="bg">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/*" element={<AdminLayout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
