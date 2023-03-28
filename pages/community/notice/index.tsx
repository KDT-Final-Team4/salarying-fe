import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Content from "@/components/ui/Content";
import styled from "styled-components";
import { useMemo } from "react";
import Table from "@/components/ui/Table";

interface Object {
  id: number;
  title: string;
  edit_id: string;
  date: string;
  state: boolean;
}

const getNotices = async () => {
  const result = await axios
    .request({
      method: "get",
      url: "/api/notice",
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export default function NoticeList() {
  const { data: notices, isLoading } = useQuery(["notices"], getNotices);

  const headerArray = ["제목", "작성자", "작성날짜", "게시중"];

  return (
    <Content title="공지사항">
      <Link href={"/community/notice/new"}>등록</Link>
      <List>
        <Top>
          {headerArray.map((header, idx) => (
            <div key={idx} className="item">
              {header}
            </div>
          ))}
        </Top>
        {!isLoading &&
          notices?.map((notice, idx) => (
            <Link
              href="/community/notice/[noticeId]"
              as={`/community/notice/${notice.id}`}
              key={idx}
            >
              <ContentList>
                <span className="item">{notice.title}</span>
                <strong className="item">{notice.edit_id}</strong>
                <time className="item">{notice.date}</time>
              </ContentList>
            </Link>
          ))}
      </List>
    </Content>
  );
}

const List = styled.div`
  color: var(--color-gray600);
`;
const Top = styled.section`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 50px 0;
  border-radius: 40px;
  background-color: var(--color-point);
  .item {
    margin: 0 auto;
  }
`;

const ContentList = styled.section`
  width: 100%;
  align-items: center;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0 1px 1px var(--color-point), 0 8px 8px var(--color-point);
  margin: 0 0 30px 0;
  .item {
    margin: 0 auto;
  }
`;
