export default function RenderIf({ children, condition }) {
    return condition ? children : null;
}