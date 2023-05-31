export default function FakeApiSearch(serchTerm) {
    const database = ["React", "Vue", "Angular", "Svelte"];
    return database.filter(item => item.toLowerCase().includes(serchTerm.toLowerCase()));
}