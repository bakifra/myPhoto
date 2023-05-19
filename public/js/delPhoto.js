
const findAlbomList = document.querySelector('.albumList');
console.log(findAlbomList);
if (findAlbomList) {
  findAlbomList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('buttonDelete')) {
      const btn = event.target;
      const res = await fetch(`/api/albums/${btn.dataset.id}`, {
        method: 'delete',
      });
      const data = await res.json()
      if (data.proveDelete) {
        btn.closest('.albumCard').remove();
      }
    }
  });
}
