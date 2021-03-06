import {Button} from "./Button";

interface SideBarProps {
    handleClickButton: (id: number) => void
    selectedGenreId: number
    genres: {
        id: number
        title: string
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
    }[]
}

export function SideBar({genres, handleClickButton, selectedGenreId}: SideBarProps) {
    return (<nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
            {genres.map(genre => (
                <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => handleClickButton(genre.id)}
                    selected={selectedGenreId === genre.id}
                />
            ))}
        </div>
    </nav>)
}
