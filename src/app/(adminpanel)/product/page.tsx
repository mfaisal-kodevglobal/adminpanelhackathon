"use client"
import SidebarMenu from "../admincomponents/SidebarMenu";

export default function Product() {

  return (
    <>
      <div className="relative bg-[#070b18] h-full min-h-screen font-[sans-serif]">
        <div className="flex items-start">
          {/* Sidebar */}
          <SidebarMenu />

          {/* Content Area */}
          <main
            className={`ml-[270px] max-lg:ml-0 max-lg:w-full p-6 bg-[#070b18] min-h-screen w-full ${
              "max-lg:ml-[240px]"
            }`}
          >
          <h1 className="text-white text-3xl font-semibold mb-10">Product Page</h1>
          <a
  href={`${process.env.BASE_URL}/product/add`}
  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-10"
>
  Product Add
</a>



            <div className="font-sans overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 whitespace-nowrap">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Joined At
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      John Doe
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      john@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      Admin
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      2022-05-15
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {/* <button className="text-blue-600 mr-4">Edit</button> */}
                      <a
  href={`${process.env.BASE_URL}/product/edit/1`}
  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-10"
>
  Product Edit
</a>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      Jane Smith
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      jane@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      User
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      2022-07-20
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                    <a
  href={`${process.env.BASE_URL}/product/edit/1`}
  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-10"
>
  Product Edit
</a>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      Alen doe
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      alen@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      User
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      2022-07-21
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                    <a
  href={`${process.env.BASE_URL}/product/edit/1`}
  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mb-10"
>
  Product Edit
</a>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
