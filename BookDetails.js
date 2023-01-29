const bookDetails = (book) => { 

    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-20 rounded-lg bg-white-500 p-4 w-1/5 ml-5 mx-auto 
    flex flex-row text-center text-black-500 font-bold">
        <img src="${book.coverImage}" alt="Saknas omslag för denna bok"width="200" height="200">
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    
    return html;
};