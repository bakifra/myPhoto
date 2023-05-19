const albumList = document.querySelector('.albumList1');
console.log(albumList);

if (albumList) {
  albumList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('buttonDelete')) {
      const btn = event.target;
      const res = await fetch(`/api/albums/${btn.dataset.album}/${btn.dataset.id}`, {
        method: 'delete',
      });
      const data = await res.json();
      if (data.proveDelete) {
        btn.closest('.albumCard').remove();
      }
    }
  });
}
