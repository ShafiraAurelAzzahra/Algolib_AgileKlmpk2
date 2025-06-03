document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const materials = [
        { name: "Materi Variabel Konstanta", link: "MateriVariabel.html" },
        { name: "Materi Kondisi Percabangan", link: "MateriKondisiPercabangan.html" },
        { name: "Materi Looping", link: "MateriLooping.html" },
        { name: "Materi Fungsi dan Prosedur", link: "MateriFungsidanProsedur.html" },
        { name: "Materi Array", link: "MateriArray.html" },
        { name: "Materi Stack", link: "MateriStack.html" },
        { name: "Materi Queue", link: "MateriQueue.html" },
        { name: "Materi Linked List", link: "MateriLinkedList.html" },
        { name: "Materi Sorting dan Searching", link: "MateriSortingandSearching.html" },
        { name: "Materi Matriks", link: "MateriMatriks.html" },
        { name: "Materi Pointer", link: "MateriPointer.html" },
        { name: "Materi Tree", link: "MateriTree.html" }
    ];

    const quizzes = [
        { name: "Quiz Variabel dan Konstanta", link: "QuizVariabel.html" },
        { name: "Quiz Kondisi Percabangan", link: "QuizKondisiPercabangan.html" },
        { name: "Quiz Looping", link: "QuizLooping.html" },
        { name: "Quiz Fungsi dan Prosedur", link: "QuizFungsidanProsedur.html" },
        { name: "Quiz Array", link: "QuizArray.html" },
        { name: "Quiz Stack", link: "QuizStack.html" },
        { name: "Quiz Queue", link: "QuizQueue.html" },
        { name: "Quiz Linked List", link: "QuizLinkedList.html" },
        { name: "Quiz Sorting and Searching", link: "QuizSortingandSearching.html" },
        { name: "Quiz Matriks", link: "QuizMatriks.html" },
        { name: "Quiz Pointer", link: "QuizPointer.html" },
        { name: "Quiz Tree", link: "QuizTree.html" }
    ];

    const allItems = [...materials, ...quizzes];

    searchForm.addEventListener("submit", handleSearch);
    document.addEventListener("click", handleClickOutside);

    function handleSearch(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            return;
        }

        const filteredItems = allItems.filter(item => item.name.toLowerCase().includes(query));
        displayResults(filteredItems);
    }

    function displayResults(items) {
        items.forEach(item => {
            const listItem = document.createElement("a");
            listItem.href = item.link;
            listItem.className = "list-group-item list-group-item-action";
            listItem.textContent = item.name;
            searchResults.appendChild(listItem);
        });
        searchResults.style.display = 'block'; // Show the results
    }

    function handleClickOutside(event) {
        if (!searchForm.contains(event.target)) {
            searchResults.style.display = 'none'; // Hide the results
        }
    }
});
