export default function Footer({ numLocations }) {
    return (
        <footer className="bg-green-500 p-4 text-white">
            &copy; 2023 Cookie Stand Admin | {numLocations}  Locations World Wide
        </footer>
    );
}