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
    let count = 0
    for (let i = 0; i < listCategory.length; i++) {
        count++
        drawTable += `<tr class="table table-hover"">
                    <td>${count}</td>
                    <td>${listCategory[i].name}</td>
                    <td><button style="border-radius: 50%" type="button" class="btn btn-success" onclick="updateCategory(${i})"><i class="bi bi-pencil-square"></i></button></td>
                    <td><button data-toggle="modal" data-target="#exampleModal" style="border-radius: 50%" type="button" class="btn btn-danger" ><i class="bi bi-backspace-fill"></i></button></td>
                     </tr>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Do you want to delete?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">No!</button>
        <button type="button" class="btn btn-primary" onclick="deleteCategory(${listCategory[i].id})" data-dismiss="modal" >Yes!</button>
      </div>
    </div>
  </div>
</div>`
    }
    document.getElementById('drawTable').innerHTML = drawTable;
}

showListCategory();


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
    for (let i = 0; i < listCategory.length; i++) {
        if (listCategory[i].id === id) {
            listCategory.splice(i, 1)
            break;
        }
    }
    showListCategory();
}
function drawOption() {
    let drawoption = '';
    for (let i = 0; i < listCategory.length; i++) {
        drawoption += `<option>${listCategory[i].name}</option>`
    }
    document.getElementById('option').innerHTML = drawoption;
}
drawOption();


