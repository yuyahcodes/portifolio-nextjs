import { navLinks } from "@/app/constants";

interface NavbarProps {
    id: string;
    title: string;
    active: string;
}

interface NavLinksProps {
    navLinks: NavbarProps[];
}

const NavigationDots = ({ active }: NavLinksProps) => {
    return (
        <div className="app__navigation">
            {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="app__navigation-dot"
                    style={active === link.id ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
