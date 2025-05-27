type GenericHtmlProps = {

    children?: React.ReactNode;
 }


export function GenericHtml({ children }: GenericHtmlProps) {
    return (
        <div>
            <h1>Generic HTML Component</h1>
            <p>This is a placeholder for generic HTML content.</p>
        </div>
    );
}