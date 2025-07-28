import "./App.css";
import { Formio } from "formiojs";
import { Form } from "@formio/react";

import premium from "@formio/premium";

import { useFetchFormioForm } from "./useFetchFormioForm";
function App() {
    Formio.use(premium);
    const { data, isLoading } = useFetchFormioForm("newform");

    if (isLoading) return <p>loading</p>;
    const formJson = {
        _id: "68860735d2a1b3cdda4299c9",
        title: "newform",
        name: "newform",
        path: "newform",
        type: "form",
        display: "form",
        tags: [],
        access: [
            { type: "create_own", roles: [] },
            { type: "create_all", roles: [] },
            { type: "read_own", roles: [] },
            { type: "read_all", roles: ["665dc56e16bf3da1b1f585d1", "665dc56e16bf3da1b1f585d5", "665dc56e16bf3da1b1f585d9"] },
            { type: "update_own", roles: [] },
            { type: "update_all", roles: [] },
            { type: "delete_own", roles: [] },
            { type: "delete_all", roles: [] },
            { type: "team_read", roles: [] },
            { type: "team_write", roles: [] },
            { type: "team_admin", roles: [] },
        ],
        submissionAccess: [
            { type: "create_own", roles: [] },
            { type: "create_all", roles: [] },
            { type: "read_own", roles: [] },
            { type: "read_all", roles: [] },
            { type: "update_own", roles: [] },
            { type: "update_all", roles: [] },
            { type: "delete_own", roles: [] },
            { type: "delete_all", roles: [] },
            { type: "team_read", roles: [] },
            { type: "team_write", roles: [] },
            { type: "team_admin", roles: [] },
        ],
        owner: "66389d73270ec7fd1ce0dd6d",
        components: [
            {
                label: "Data Source",
                persistent: "client-only",
                trigger: { init: false, server: false },
                dataSrc: "url",
                fetch: {
                    url: "https://github.com/formio/instructions",
                    method: "get",
                    headers: [{ key: "", value: "" }],
                    mapFunction: "",
                    forwardHeaders: false,
                    authenticate: false,
                },
                allowCaching: true,
                key: "dataSource",
                type: "datasource",
                input: true,
                tableView: false,
            },
            {
                label: "Data Table",
                sortable: true,
                filterable: true,
                inlineEditing: false,
                clipCells: false,
                itemsPerPage: 10,
                showAddBtn: true,
                showEditBtn: true,
                showDeleteBtn: true,
                showDeleteAllBtn: false,
                tableView: false,
                isSubmitData: false,
                fetch: { enableFetch: false, headers: [{}], components: [] },
                key: "dataTable",
                type: "datatable",
                input: true,
                components: [
                    {
                        label: "Name",
                        applyMaskOn: "change",
                        columnWeight: 0,
                        hideColumnByDefault: false,
                        disableSortingAndFiltering: false,
                        tableView: true,
                        key: "name",
                        type: "textfield",
                        input: true,
                    },
                    {
                        label: "Age",
                        applyMaskOn: "change",
                        columnWeight: 0,
                        hideColumnByDefault: false,
                        disableSortingAndFiltering: false,
                        tableView: true,
                        key: "age",
                        type: "textfield",
                        input: true,
                    },
                ],
            },
            { type: "button", label: "Submit", key: "submit", disableOnInvalid: true, input: true, tableView: false },
        ],
        settings: {},
        properties: {},
        project: "665dc56c16bf3da1b1f585c7",
        controller: "",
        revisions: "",
        submissionRevisions: "",
        _vid: 0,
        created: "2025-07-27T11:02:13.025Z",
        modified: "2025-07-27T11:20:25.507Z",
        machineName: "dev:newform",
    };
    return (
        <>
            <div>
                <p>test render</p>
                {data ? (
                    <Form
                        form={data}
                        src={"https://formio-dev.iis-ssb.com/dev/newform"}
                        submission={{
                            data: {
                                requestTable: [
                                    {
                                        name: "Maha",
                                        age: "30",
                                    },
                                    {
                                        name: "Ahmed",
                                        age: "20",
                                    },
                                ],
                            },
                        }}
                    />
                ) : (
                    <p>loading</p>
                )}
            </div>
        </>
    );
}

export default App;
