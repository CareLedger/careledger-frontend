import Home from "./pages/Home/home";
import "./styles/App.css";
import "./styles/variables.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import {
  WagmiConfig,
  createClient,
  configureChains,
  Chain,
  chain,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Auth/SignUp/signup";
import Login from "./pages/Auth/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  const celoChain = {
    id: 44787,
    name: "Celo Testnet",
    network: "avalanche",
    nativeCurrency: {
      decimals: 18,
      name: "Celo Alfajores Testnet",
      symbol: "CELO",
    },
    rpcUrls: {
      default: "https://alfajores-forno.celo-testnet.org",
    },
    blockExplorers: {
      default: { name: "CeloExplorer", url: "https://docs.celo.org/" },
      snowtrace: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: false,
  };

  // const { chains, provider } = configureChains(
  //   [mainnet, polygon, optimism, arbitrum],
  //   [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
  //   [celoChain],
  //   [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
  // );

  const { provider, chains } = configureChains(
    [celoChain],
    [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
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
      <RainbowKitProvider chains={chains} coolModes theme={midnightTheme()}>
        <div className="bg">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
