export async function getAllBooks(setBookList) {
  const API_KEY = "AIzaSyA35-PtwBxHkRSegsYgwUoPks9KLFahcmU"; // optional for higher limits

  // Filters:
  // - subject:juvenile = kids/children’s category
  // - filter=free-ebooks = ensures only free downloadable books
  // - printType=books = ignore magazines
  // - langRestrict=en = English books only
  // - maxResults=40 = max per call (can paginate if needed)
  const url = `https://www.googleapis.com/books/v1/volumes?q=children&filter=free-ebooks&maxResults=20&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

    if (!data.items) throw new Error("Invalid Google Books API response");

    const booksArr = data.items
      .filter(
        (item) =>
          item.accessInfo?.publicDomain === true &&
          (item.accessInfo?.epub?.isAvailable || item.accessInfo?.pdf?.isAvailable)
      )
      .map((item) => ({
        title: item.volumeInfo?.title || "Untitled",
        authors: item.volumeInfo?.authors?.join(", ") || "Unknown Author",
        description: item.volumeInfo?.description || "No description available.",
        thumbnail:
          item.volumeInfo?.imageLinks?.thumbnail ||
          "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
        publishedDate: item.volumeInfo?.publishedDate || "Unknown",
        infoLink: item.volumeInfo?.infoLink,
        epubAvailable: item.accessInfo?.epub?.isAvailable || false,
        pdfAvailable: item.accessInfo?.pdf?.isAvailable || false,
        downloadLinks: {
          epub: item.accessInfo?.epub?.downloadLink || null,
          pdf: item.accessInfo?.pdf?.downloadLink || null,
        },
      }));

    const cache = {
      savedAt: Date.now(),
      books: booksArr,
    };

    localStorage.setItem("All Books", JSON.stringify(cache));
    setBookList(booksArr);
  } catch (err) {
    console.error("Error fetching all books:", err);
  }
}