import React from "react";
import { Table } from "reactstrap";
import { Eye } from "lucide-react";
import { useSearchParams } from "react-router-dom";
export default function Contact() {
  let user = [
    { name: "hari", age: 22, city: "surat" },
    { name: "ram", age: 25, city: "surat" },
    { name: "rishiv", age: 23, city: "surat" },
  ];

  const [search, setSearch] = useSearchParams();
  return (
    <div
      className="d-flex justify-content-center   bg-danger-subtle"
      style={{ height: "80vh", alignItems: "center" }}
    >
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.city}</td>
                  <td>
                    <Eye
                      role="button"
                      size={32}
                      color="#14163d"
                      strokeWidth={1}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
