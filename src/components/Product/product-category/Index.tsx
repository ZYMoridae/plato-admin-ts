import * as React from "react";

import Footer from "../../Footer";
import { Layout, Table, Divider, Tag, Breadcrumb, Button, Icon } from "antd";

import { Row, Col } from "antd";

const { Header, Content, Sider } = Layout;

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text: any, record: any) => (
      <a href={`/products/categories/${record.id}`}>{text}</a>
    )
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <span>
        {/* <a>Invite {record.name}</a>
        <Divider type="vertical" /> */}
        <a>Delete</a>
      </span>
    )
  }
];

type IndexState = {
  offset: number;
  pagination: any;
};

type IndexProps = {
  totalElements: number;
  page: number;
  perPage: number;
  orderBy?: string;
  fetchAllProductCategory: any;
  productCategories: any;
  totalPages: number;
  fetchAllProductCategoryPending: any;
};

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: any) {
    super(props);
    this.state = { offset: 0, pagination: {} };
  }

  componentDidMount() {
    const { page, perPage } = this.props;
    let currentOffset = (page - 1) * perPage;
    this.handleClick(currentOffset);
  }

  updateUrlParmas(page: number, perPage: number, orderBy: string) {
    if (history.pushState) {
      let url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}&perPage=${perPage}&orderBy=${orderBy}`;
      window.history.pushState(
        {
          path: url
        },
        "",
        url
      );
    }
  }

  /**
   * Handle pagination click
   *
   * @param {*} offset
   */
  handleClick(offset: number) {
    const { perPage, orderBy, fetchAllProductCategory } = this.props;
    let page = offset / this.props.perPage + 1;
    this.setState({ offset });
    this.updateUrlParmas(page, perPage, orderBy);
    fetchAllProductCategory(page, perPage, orderBy);
  }

  handleTableChange = (pagination: any, filters: any, sorter: any) => {
    const { fetchAllProductCategory } = this.props;
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    fetchAllProductCategory(pagination.current, pagination.pageSize, "id");
  };

  render() {
    const {
      productCategories,
      perPage,
      totalPages,
      fetchAllProductCategoryPending,
      totalElements
    } = this.props;

    const onDeleteClick = (product: any) => {
      window.location.href = "/products/categories/" + product.id;
    };

    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Product Category</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Row gutter={8} style={{ marginBottom: "8px" }}>
            <Col style={{float: "right"}}>
              <Button
                type="primary"
                onClick={() => {
                  window.location.href = "/products/categories/new";
                }}
              >
                <Icon type="plus" />
                Add
              </Button>
            </Col>
          </Row>

          <Table
            columns={columns}
            dataSource={productCategories}
            rowKey={record => record.id}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "30"],
              total: totalElements
            }}
            onChange={this.handleTableChange}
            loading={fetchAllProductCategoryPending}
          />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default Index;
