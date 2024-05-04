interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <section className="bg-zinc-800 flex-grow px-4 sm:px-8 w-full">
            {children}
        </section>
    );
};

export default PageLayout;
