import { createRoot } from 'react-dom/client';
import Checkbox from './components/Like';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Like />)