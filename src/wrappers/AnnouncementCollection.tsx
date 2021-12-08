import ResponsiveContainer from "./ResponsiveContainer";

const AnnouncementCollection: React.FC = ({ children }) => {
    return (
        <ResponsiveContainer>
            {children}
        </ResponsiveContainer>
    );
}

export default AnnouncementCollection;
