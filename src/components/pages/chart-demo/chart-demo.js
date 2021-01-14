import React, { useState, useEffect } from 'react';
import { Line, Pie } from '@ant-design/charts';
import { OrganizationTreeGraph } from '@ant-design/charts';


const ChartDemo = () => {
  ////////////////LINE
  const data = [
    { year: '1991', value1: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  ////////////
    const orgData = {
      id: 'root',
      label: 'root',
      children: [
        {
          id: 'c1',
          label: 'c1',
          children: [
            {
              id: 'c1-1',
              label: 'c1-1',
            },
            {
              id: 'c1-2',
              label: 'c1-2',
              children: [
                {
                  id: 'c1-2-1',
                  label: 'c1-2-1',
                },
                {
                  id: 'c1-2-2',
                  label: 'c1-2-2',
                },
              ],
            },
          ],
        },
        {
          id: 'c2',
          label: 'c2',
        },
        {
          id: 'c3',
          label: 'c3',
          children: [
            {
              id: 'c3-1',
              label: 'c3-1',
            },
            {
              id: 'c3-2',
              label: 'c3-2',
              children: [
                {
                  id: 'c3-2-1',
                  label: 'c3-2-1',
                },
                {
                  id: 'c3-2-2',
                  label: 'c3-2-2',
                },
                {
                  id: 'c3-2-3',
                  label: 'c3-2-3',
                },
              ],
            },
            {
              id: 'c3-3',
              label: 'c3-3',
            },
          ],
        },
      ],
    };


  const DemoOrganizationGraph = () => {

    const traverseTree = (data, fn)  => {
      if (typeof fn !== 'function') {
        return;
      }

      if (fn(data) === false) {
        return false;
      }

      if (data && data.children) {
        for (let i = data.children.length - 1; i >= 0; i--) {
          if (!traverseTree(data.children[i], fn)) return false;
        }
      }
      return true;
    };

    traverseTree(data, (d) => {
      d.leftIcon = {
        style: {
          fill: '#e6fffb',
          stroke: '#e6fffb',
        },
        img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ',
      };
      return true;
    });

  };
    const handleCanvasClick = (graph) => {
      const selectedEdges = graph.findAllByState('edge', 'selected');
      selectedEdges.forEach((edge) => {
        graph.setItemState(edge, 'selected', false);
      });

      const selectedNodes = graph.findAllByState('node', 'selected');

      selectedNodes.forEach((node) => {
        graph.setItemState(node, 'selected', false);
      });
    };

    const handleNodeClick = (item, graph) => {
      graph.setItemState(item, 'selected', true);
    };

      const nodeStateStyles = {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
        selected: {
          stroke: '#f00',
          lineWidth: 3,
        },
      };
///////////////////////////////////////////////////////////

  var pieData = [
    {
      type: 'Яблоки',
      value: 27,
    },
    {
      type: 'Бананы',
      value: 25,
    },
    {
      type: 'Апельсины',
      value: 18,
    },
    {
      type: 'Груши',
      value: 15,
    },
    {
      type: 'Абрикосы',
      value: 10,
    },
    {
      type: 'Виноград',
      value: 5,
    },
  ];
  var pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat(percent * 100, '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };



  return (
    <div>
        <Line {...config} />
        <p/>
        <p/>
        <p/>
        <p/>
        <OrganizationTreeGraph
            data={orgData}
            nodeType="rect"
            nodeStateStyles={nodeStateStyles}
            handleNodeClick={handleNodeClick}
            handleCanvasClick={handleCanvasClick}
        />
        <p/>
        <p/>
        <p/>
        <p/>
        <Pie {...pieConfig} />

    </div>
  );
};
export default ChartDemo;
