import styled from "styled-components";

export const Table = styled.table`
  ${(props) => props.fullWidth && "width: 100%;"}
  ${(props) =>
    props.edgeLine &&
    `
    border-top: solid 1px ${props.theme.colors.accent2};
    border-bottom: solid 1px ${props.theme.colors.accent2};
  `}
`;

export const TableHead = styled.thead`
  border-bottom: solid 2px ${(props) => props.theme.colors.accent2};
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  border-bottom: solid 1px ${(props) => props.theme.colors.accent2};

  &:last-child {
    border-bottom: none;
  }
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.accent1};
  }
  > :last-child {
    margin-left: auto;
  }
`;

export const CellHead = styled.th`
  text-align: left;
  padding: 0.5em;
  font-weight: 600;
`;

export const Cell = styled.td`
  padding: 0.5em;
  color: ${(props) => props.theme.colors.text};
  a {
    color: ${(props) => props.theme.colors.text};
  }
`;
