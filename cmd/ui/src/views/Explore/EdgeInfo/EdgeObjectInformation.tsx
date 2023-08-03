// Copyright 2023 Specter Ops, Inc.
// 
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { SelectedEdge } from 'src/ducks/edgeinfo/edgeSlice';
import EdgeInfoCollapsibleSection from 'src/views/Explore/EdgeInfo/EdgeInfoCollapsibleSection';
import { EntityField, FieldsContainer, ObjectInfoFields } from 'src/views/Explore/fragments';
import { formatObjectInfoFields } from 'src/views/Explore/utils';

const EdgeObjectInformation: React.FC<{ selectedEdge: NonNullable<SelectedEdge> }> = ({ selectedEdge }) => {
    const sourceNodeField: EntityField = {
        label: 'Source Node:',
        value: selectedEdge.sourceNode.data.name,
    };

    const targetNodeField: EntityField = {
        label: 'Target Node:',
        value: selectedEdge.targetNode.data.name,
    };

    const formattedObjectFields: EntityField[] = [
        sourceNodeField,
        targetNodeField,
        ...formatObjectInfoFields(selectedEdge.data || {}),
    ];

    return (
        <EdgeInfoCollapsibleSection section={'data'}>
            <FieldsContainer>
                <ObjectInfoFields fields={formattedObjectFields} />
            </FieldsContainer>
        </EdgeInfoCollapsibleSection>
    );
};

export default EdgeObjectInformation;
