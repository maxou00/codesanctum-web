import { NextResponse } from "next/server";

export async function GET(request: Request) {

    let html = `
    <html>
        <head>
            <title>CodeSanctum | Embedded</title>
        </head>
        <body>
            <script type="text/javascript">
                window.addEventListener("message", ev) => {
                    console.log(ev);
                }
            </script>
        </body>
    </html>
    `

    return new NextResponse(html, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}
