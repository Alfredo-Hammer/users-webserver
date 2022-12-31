let tbody = document.getElementById("tbody");

//Fetch function
fetch("http://localhost:3000/user")
  .then((response) => response.json())
  .then((data) => {
    data.map((data) => {
      tbody.append(td_func(data.name, data.profile, data.email, data.role, data.status));
    });
  });

//create td
function td_func(user, img, email, role, status) {
  var td = document.createElement("tr");
  td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" src= ${img} alt="">
        </div>
        <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
               ${user}
            </div>
            <div class="text-sm text-gray-500">
                ${email}
            </div>
        </div>
    </div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        ${status}
    </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span class="text-sm text-gray-500"> ${role} </span>
</td>
    `;
  return td;
}
