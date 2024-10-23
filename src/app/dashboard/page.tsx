import Link from "next/link";

export default function Page() {
    return (
        <div>
            Dashboard [TBD]
            <ul>
                <li>
                    <Link href="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
}