const AnnouncementCollection: React.FC = ({ children }) => {
    return (
        <div className="pl-3">
            <h1 className="title is-1 yss-color-core is-underlined">Announcements:</h1>
            <div className="p-1">{children}</div>
        </div>
    );
}

export default AnnouncementCollection;
