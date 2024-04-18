import React from "react";
export const menuItemsData = [
    {
      title: 'My Company',
      url: '/Company',
    },
    {
      title: 'HR Essentials',
      url: '/HR',
      submenu: [
        {
            title:'For Employees',
            url:'hressentialforemployees'
        },
        {
            title:'For HR Department',
            url:'hressentialfordepartment'
        },
      ]
    },
    {
      title: 'Travel Management',
      url: '/travel',
      submenu: [
        {
            title:'Travel Requisition form',
            url:'travelrequisition'
        },
        {
            title:'Travel expenses submission form',
            url:'travelexpensesform'
        },
        {
            title:'Travel History',
            url:'travelhistory'
        }
      ]
    },
    {
        title: 'Data Room',
        url: '/data room',
        submenu: [
            {
                title:'Products',
                url:'products'
            },
            {
                title:'BOM',
                url:'BOM'
            },
            {
                title:'3D Models',
                url:'3dmodels'
            },
            {
                title:'CAD 2D Drawings',
                url:'cad2d'
            },
            {
                title:'Parts Library',
                url:'partslibrary'
            }
          ]
      },
      {
        title: 'Project Management',
        url: '/project',
        submenu: [
            {
                title:'Projects Display',
                url:'projects'
            },
            {
                title:'Project Reports',
                url:'projectreports'
            },
          ]
      },
      {
        title: 'Performance Management',
        url: '/performance',
        submenu: [
            {
                title:'Performance based on KRA Format',
                url:'KRA Format'
            },
            {
                title:'approved performance document',
                url:'performancedocuments'
            },
          ]
      },
      {
        title: 'Documents',
        url: '/documents',
        submenu: [
            {
                title:'learning policies',
                url:'learningpolicies'
            },
            {
                title:'Company Policies',
                url:'companypolicies'
            },
          ]
      },
      {
        title: 'Calendar',
        url: '/Calendar',
        submenu: [
            {
                title:'Display Calendar',
                url:'display calendar'
            },
            {
                title:'Manage Appointments',
                url:'manageappointments'
            },
          ]
      },

  ];