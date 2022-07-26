class Category {
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

}

let listCategory = [];
let category1 = new Category(1, 'Nhạc Trẻ')
let category2 = new Category(2, 'Nhạc vàng')
let category3 = new Category(3, 'Nhạc Đỏ')
let category4 = new Category(4, 'POP')
listCategory.push(category1, category2, category3, category4);

function showListCategory() {
    let drawTable = '';
    for (let i = 0; i < listCategory.length; i++) {
        let c = i + 1
        drawTable += `<tr class="table table-hover"">
                    <td>${c}</td>
                    <td>${listCategory[i].name}</td>
                    <td><button style="border-radius: 50%" type="button" class="btn btn-success" onclick="updateCategory(${i})"><i class="bi bi-pencil-square"></i></button></td>
                    <td><button data-toggle="modal" data-target="#exampleModal" style="border-radius: 50%" class="btn btn-danger"><i class="bi bi-backspace-fill"></i></button></td>
                     </tr>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Category!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Do you want to delete?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="deleteCategory(${i})">Yes</button>
      </div>
    </div>
  </div>
</div>

`
    }
    document.getElementById('drawTable').innerHTML = drawTable;
    let song = ""
    for (let i = 0; i < listCategory.length; i++) {
        let value = listCategory[i].name;
        song += `<option value="${value}">${listCategory[i].name}</option>`
    }
    document.getElementById('option').innerHTML = song;
}

showListCategory();
let valueSelect;

function selectCategory() {
    valueSelect = document.getElementById('option').value;
    console.log('valueSelect ===> ', valueSelect)
}


function createCategory() {
    let check = true;
    let newCategory = document.getElementById('newCategory').value;
    if (newCategory.trim() === '') {
        document.getElementById('validate').innerHTML = '<span style="color: red">The name is required! Please try again!</span>'
    } else {
        for (let j = 0; j < listCategory.length; j++) {
            if (newCategory.toLowerCase() === listCategory[j].name.toLowerCase()) {
                check = false;
            }
        }
        if (check) {
            listCategory.push(new Category(listCategory[listCategory.length - 1].id + 1, newCategory));
            document.getElementById('validate').innerHTML = '<span style="color: blue">Update Success!!</span>'
        } else {
            document.getElementById('validate').innerHTML = '<span style="color: red"> Please try again!</span>'
        }
    }

    showListCategory();
}

function updateCategory(id) {
    let check2 = true;
    let editCategory = prompt('Edit Category: ', listCategory[id].name)
    if (editCategory.trim() === '') {
        document.getElementById('validate').innerHTML = '<span style="color: red"> Please try again!</span>'
    } else {
        for (let i = 0; i < listCategory.length; i++) {
            if (editCategory.toLowerCase() === listCategory[i].name.toLowerCase()) {
                check2 = false;
                document.getElementById('validate').innerHTML = '<span style="color: red">Same Name.Please try again!!!</span>'

            }
        }
    }
    if (check2) {
        listCategory[id].setName(editCategory)
    }
    showListCategory();
}

function deleteCategory(id) {
    console.log('=======', id)
    listCategory.splice(id, 1)
    showListCategory();
}

class Song {
    id;
    name;
    lyric;
    category;

    constructor(id, name, lyric, category) {
        this.id = id;
        this.name = name;
        this.lyric = lyric;
        this.category = category;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getLyric() {
        return this.lyric;
    }

    setLyric(lyric) {
        this.lyric = lyric;
    }

    getCategory() {
        return this.category
    }

    setCattegory(category) {
        this.category = category
    }
}

listSong = [];

function createSong() {
    let nameSong = document.getElementById('nameSong').value;
    let lyric = document.getElementById('lyric').value;

    let idSong = 0;
    if (listSong.length === 0) {
        idSong = 1;
    } else {
        idSong = listSong[listSong.length - 1].id + 1;
    }
    let newSong = new Song(idSong, nameSong, lyric, valueSelect);
    listSong.push(newSong);


    showListSong()
}

function showListSong() {
    let drawTableSong = '';

    for (let i = 0; i < listSong.length; i++) {
        drawTableSong += `<tr class="table table-hover"">
                      <td>${listSong[i].id = i + 1}</td>
                      <td>${listSong[i].name}</td>
                       <td>${listSong[i].lyric}</td>
                        <td>${listSong[i].category}</td>
</tr>`
    }
    document.getElementById('drawTableSong').innerHTML = drawTableSong;

}

showListSong()
selectCategory()
